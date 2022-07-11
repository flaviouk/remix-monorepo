const { findRootSync } = require("@manypkg/find-root");
const { getAllPackages } = require("standard-monorepo");

exports.getConfig = () => {
  const dir = findRootSync(process.cwd());
  const pkgs = getAllPackages(dir);

  return {
    serverDependenciesToBundle: pkgs.map((pkg) => pkg.name),
    watchPaths: pkgs.map((pkg) =>
      pkg.location.replace("package.json", "src/**/**")
    ),
  };
};
