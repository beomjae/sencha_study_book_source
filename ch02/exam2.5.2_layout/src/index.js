Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var panel = new Ext.Panel({
            fullscreen: true,
            
            layout:{
                type:'vbox',
                //align:'stretch',
                pack:'end',
                
            },
            items:[
                {
                	dock: 'top',            		
                    style:'background-color:red;;font-size:40px',
                    html: 'ù��°'
                },
             
                {
                	dock:'bottom',
                    style:'background-color:green;font-size:40px',
                    html: '�ι�°'
                },
                {
                	dock:'left',
                    style:'background-color:blue;font-size:40px',
                    html: '����°'
                } 
                              
            ],
        });    
    }
});
