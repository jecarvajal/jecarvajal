module.exports = {


  friendlyName: 'View informacion',


  description: 'Display "Informacion" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/informacion'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
