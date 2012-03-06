Ext.ns("phonegap_sencha");

Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var count = 0;
        phonegap_sencha.panel = new Ext.TabPanel({
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            fullscreen: true,
            ui: 'light',
            cardSwitchAnimation: {
                type: 'cube',
            },
            iconAlign:'left',
            defaults: {
                scroll: 'vertical'
            },
            getGeo:function(position)
            {
            	alert("PheneGap���� ���� ���� ��ġ:" + position.coords.latitude + "," +  position.coords.longitude );
            },
            items: [{
                title: 'About',
                html: '<center><font size="64" color="red"><BR>1<BR>ù��° </font></center>',
                iconCls: 'info',
                
                cls: 'card1',
             
            }, {
                title: 'Favorites',
                html: '<center><font size="64" color="red"><BR>2<BR>�ι�° </font></center>',
                iconCls: 'favorites',
                cls: 'card2',
               
                
            }, {
                title: 'Downloads',
                id: 'tab3',
                html: '<center><font size="64" color="red"><BR>3<BR>����° </font></center>',
                
                cls: 'card3',
                iconCls: 'download',

            }, {
                title: 'Settings',
                html: '<center><font size="64" color="red"><BR>4<BR>�׹�° </font></center>',
                cls: 'card4',
                iconCls: 'settings',

            }, {
                title: 'User',
                html: '<center><font size="64" color="red"><BR>5<BR>�ټ���° </font></center>',
                cls: 'card5',
                iconCls: 'user',

            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                layout: {
                    pack: 'center'
                },
                defaults: {
                    iconMask: true,
                },
                items: [
                { 
                    text:'ī�޶�',    
                    handler:function()
                    {
						callCamera();
                    }               
                },
                { 
                    text:'�����浵',    
                    handler:function()
                    {
						callLocationPos();
                    }               
                },
                { 
                    text:'����Upload',    
                    handler:function()
                    {
						callFileUpload();
                    }               
                }]
            }]            
        });
    }    
});