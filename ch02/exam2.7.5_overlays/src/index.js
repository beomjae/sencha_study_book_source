Ext.setup({
    icon: 'icon.png',
    glossOnIcon: false,
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    onReady: function() {
        
        var overlayToolbar = new Ext.Toolbar({
           dock: 'top'
        });
        
        var overlay = new Ext.Panel({
            floating: true,
            modal: true,
            centered: false,
            width: 400,
            height: 400,
            styleHtmlContent: true,
            dockedItems: overlayToolbar,
            scroll: 'vertical',
            contentEl: 'overlayid',
            cls: 'htmlcontent'
        });


        var dockedItems = [{
            dock: 'top',
            xtype: 'toolbar',
            items: [{
                text: '��ư Overlay �����ֱ�',
                handler: function(btn,event){
		            overlay.setCentered(false);
		            overlayToolbar.setTitle('��ư�� ��ġ��Overlay');
		            overlay.showBy(btn);                	
                }
            }, 
            {xtype: 'spacer'}, 
            {
                text: '��� Overlay �����ֱ�',
                handler: function(btn,event){
		            overlay.setCentered(true);
		            overlayToolbar.setTitle('��� ��ġ��Overlay');
		            overlay.show();                	
                }
            }, 
            ]
        }];
        
        new Ext.Panel({
            fullscreen: true,
            dockedItems: dockedItems,
            html: "Overlay�� �����ִ� �����Դϴ�."
        });
    }
});