const globby = require('globby');
const path = require('path');
const trash = require('trash');

module.exports = async (rootPath, options = {}) => {
  const packagePaths = await globby('**/{bower,package}.json', Object.assign({ absolute: true, cwd: rootPath }, options));
  const modulePaths = packagePaths.map(p => path.join(path.dirname(p), '{bower_components,node_modules}'));

  return trash(modulePaths);
};
