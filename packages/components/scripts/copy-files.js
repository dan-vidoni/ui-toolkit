const path = require('path');
const fse = require('fs-extra');
const glob = require('glob');

const packagePath = process.cwd();
const libPath = path.join(packagePath, './lib');
const srcPath = path.join(packagePath, './src');

/**
 * Puts a package.json into every immediate child directory of rootDir.
 * That package.json contains information about esm for bundlers so that imports
 * like import Typography from '@material-ui/core/Typography' are tree-shakeable.
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
  const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } = JSON.parse(
    packageData,
  );
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
    module: './esm/index.js'
  };
  const targetPath = path.resolve(libPath, './package.json');
  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');

  return newPackageData;
}

async function run() {
  try {
    const packageData = await createPackageFile();
    await createModulePackages({ from: srcPath, to: libPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
