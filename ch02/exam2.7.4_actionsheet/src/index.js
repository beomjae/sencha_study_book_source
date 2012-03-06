Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var action_sheet = new Ext.ActionSheet({
            useTitles: true,
            title:'�����ư',
            items:[{
            	text:'ù°��ư',
            	ui:'round',
            	handler:function(){
            		Ext.getCmp("text_result").setValue("ù°��ư");
            		action_sheet.hide();
            	}
            },{
            	text:'��°��ư',
            	ui:'decline',
            	handler:function(){
            		Ext.getCmp("text_result").setValue("��°��ư");
            		action_sheet.hide();
            	}
            },{
            	text:'��°��ư',
            	ui:'confirm',
            	handler:function(){
            		Ext.getCmp("text_result").setValue("��°��ư");
            		action_sheet.hide();
            	}
            	
            }]
        });
        
        var action_sheet_small = new Ext.ActionSheet({
            useTitles: true,
            title:'�����ư',
            items:[{
            	text:'ù° ��ư',
            	ui:'small',
            	handler:function(){
            		Ext.getCmp("text_result").setValue("ù°������ư");
            		action_sheet_small.hide();
            	}
            	
            },{
            	text:'��°��ư',
            	ui:'decline-small',
            	handler:function(){
            		Ext.getCmp("text_result").setValue("��°������ư");
            		action_sheet_small.hide();
            	}
            },{
            	text:'��°��ư',
            	ui:'confirm-small',
            	handler:function(){
            		Ext.getCmp("text_result").setValue("��°������ư");
            		action_sheet_small.hide();
            	}
            }]
	    });
        var panel = new Ext.form.FormPanel({
            fullscreen: true,
            layout: {
               
                align: 'center',
                pack: 'center'
            },
            items: [
            {
					xtype:'textfield',
    				id:'text_result',
    				label:'���',
    				autoCapitalisze:true,
            },           
            {
                xtype: 'button',
                ui: 'normal',
                text: 'ū��ư',
                handler: function() {
                    action_sheet.show();
                }
            },{
                xtype: 'button',
                ui: 'normal',
                text: '������ư',
                handler: function() {
                    action_sheet_small.show("pop");
                }
            }]
        });
    }
});