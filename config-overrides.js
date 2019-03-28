// const { injectBabelPlugin } = require('react-app-rewired');npm install customize-cra --save-dev

// module.exports = function override(config, env) {
//   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//   console.log('sadsa',config)
//   return config;
// };

const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);