const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const srcPath = path.join(packagePath, './src');

/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Button from '@demo-ui-toolkit/core/Button' are tree-shakeable.
 * @param {string} rootDir
 */
async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.js', { cwd: from }).map(path.dirname);    
  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        sideEffects: false,
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

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8');
  const { 
    author,
    version,
    description,
    keywords,
    repository,
    license,
    peerDependencies,
    dependencies
  } = JSON.parse(packageData);

  const newPackageData = {
    name: "@demo-ui-toolkit/components",
    main: './index.js',
    module: './esm/index.js',
    author,
    version,
    homepage,
    description,
    peerDependencies,
    dependencies,
    keywords,
    repository,
    license
  };
  const targetPath = path.resolve(buildPath, './package.json');
  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');

  return newPackageData;
}

async function run() {
  try {
    const packageData = await createPackageFile();
    await createModulePackages({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
