function ApplicationHomeWindow(listeXassaides) {
  
/**
 * Create a window
 */
  var self = Titanium.UI.createWindow({
    title: 'XassidaReader',
    backgroundColor: '#fff'
  });
  
  var rows = new Array();


/**
 * Custom rows in tableView
 */
  for(var i=0,j=listeXassaides.length; i<j; i++)
  {
    
    var row = Titanium.UI.createTableViewRow({
      xassida: {
         titre: listeXassaides[i].titre, 
         tardioumane: listeXassaides[i].tardioumane,
         transcription: {
            titre: listeXassaides[i].transcription_du_titre,
            tardioumane: 'tardioumane'
         } 
       }
    });
    
    var view = Titanium.UI.createView({ 
      height:'auto', 
      layout:'vertical', 
      top:5, 
      right:5 
    });
    
    var label = Titanium.UI.createLabel({
      text: listeXassaides[i].titre,
      color: '#000',
      right: 0,
      font: {
        fontSize: '15dp'
      }
    });
    
    view.add(label);
    
    row.add(view);
    
    rows.push(row);
      
  };

/**
 *  -------------------------------------------------------------------------------------------------
 *  Create a TableView
 *  -------------------------------------------------------------------------------------------------
 */

  var xassaidesTableView = Ti.UI.createTableView({
    data: rows,
  });
     
/**
 *  ------------------------------------------------------------------------------------------------
 *  Listen for click events on table rows
 *  -------------------------------------------------------------------------------------------------
 */
  xassaidesTableView.addEventListener('click', function(e) {
    var xassida = e.rowData.xassida;
    
    alert(xassida.titre + '\n' + xassida.tardioumane)
        
  }); /** end listen for click events --------------------------------------------------------------- */


  
/**
 * Add views to the window
 */
  self.add(xassaidesTableView) 
  
  //loadingScreen.show(); // show the loading screen  
         
  return self;
  
}

module.exports = ApplicationHomeWindow;
