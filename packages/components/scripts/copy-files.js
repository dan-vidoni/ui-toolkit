const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const libPath = path.join(packagePath, './lib');
const srcPath = path.join(packagePath, './src');

/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Button from '@demo-ui-toolkit/components/lib/Button' are tree-shakeable.
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.js', { cwd: from }).map(path.dirname);
  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        module: path.join('../esm', directoryPackage, 'index.js')
      };
      const packageJsonPath = path.join(to, directoryPackage, 'package.json');
      await Promise.all([
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]);

      return packageJsonPath;
    }),
  );
}

async function run() {
  try {
    await createModulePackages({ from: srcPath, to: libPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
