Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var date_picker = new Ext.DatePicker({
            useTitles: true,
            
            value: {
                day: 18,
                month: 4,
                year: 2011
            },
            listeners:{
            	"hide":function(picker){
            		console.log(Ext.getCmp("date_field"));
            		Ext.getCmp("date_field").setValue(picker.getValue().format('Y-m-d'));
            	}
            }                        
        });
     
		var degree_picker = new Ext.Picker({
		    slots: [
		        {
		            name : 'degree_data',
		            title: '�����',
		            data : [
		                {text: 'ȫ�浿', value: 'VIP'},
		                {text: '�Ӱ���', value: 'VIP'},
		                {text: '�����', value: '�췮'},
		                {text: 'Ǫ����', value: '�Ϲ�'}
		            ]
		        }
		    ],
            listeners:{
            	"hide":function(picker){
            		//console.log(Ext.getCmp("degree_field"));
            		console.log(picker.getValue().degree_data);
            		Ext.getCmp("degree_field").setValue(picker.getValue().degree_data);
            		
            	}
            }  		    
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
    				id:'degree_field',
    				label:'�����',
    				placeHolder:'��ư Ŭ��!!',
    				autoCapitalisze:true,
    				useClearIcon:false
            },           
            {
                xtype: 'button',
                ui: 'normal',
                text: '�����',
                handler: function() {
                    degree_picker.show();
                }
            },            
            {
					xtype:'textfield',
    				id:'date_field',
    				label:'��¥',
    				placeHolder:'��ư Ŭ��!!',
    				autoCapitalisze:true,
    				useClearIcon:false
            },           
            {
                xtype: 'button',
                ui: 'normal',
                text: '��¥',
                handler: function() {
                    date_picker.show();
                }
            },

            ]
        });
    }
});