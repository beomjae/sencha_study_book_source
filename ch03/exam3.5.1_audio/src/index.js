
Ext.setup({
    icon: 'icon.png',
    glossOnIcon: false,
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    onReady: function() {

		var toggle=0;
		new Ext.form.FormPanel({
	        fullscreen: true,
	        
	    	layout: {
				type: 'vbox', 
				pack: 'center',
			}, 			
			items:[
			{
				
	            xtype: 'fieldset',
	            title: 'MP3 �÷��̾�',
	            instructions: 'mp3�� �����մϴ�.',			           
	            width: 400,
	            height:400,
 	            
	            items:[
	            { 	xtype: 'spacer',
	            	height: 20
	            },
		        {
		        	id: 'player',
		            xtype: 'audio',
		            url  : "crash.mp3"
		        },
				{
                    xtype: 'textfield',
                    name : 'name',
                    id:    'name',
                    label: '����',
                    useClearIcon: true,
                    autoCapitalize : true
                },	
	            { 	xtype: 'spacer',
	            	height: 10
	            },                	        
				{
			    	layout: {
						type: 'hbox', 
						pack: 'center',					
					},
					 		
					items:[
		            { 	xtype: 'spacer',
		            	width: 50
		            },					
					{			
						xtype:'button',
						width:50,
						text:'��',
						handler:function(){
							toggle = 1;
							Ext.getCmp("player").play();
							Ext.getCmp("name").setValue("������...");
						}
					},
					{			
						xtype:'button',
						width:50,
						text:'��', 
						handler:function(){
							toggle =0;
							Ext.getCmp("player").pause();
							Ext.getCmp("name").setValue("����...");
						}
					},
					{			
						xtype:'button',
						width:50,
						text:'��', 
						handler:function(){
							Ext.getCmp("player").toggle();
							if(toggle==1)
							{
								toggle = 0;
								Ext.getCmp("name").setValue("����...");
							}
							else if(toggle==0)
							{
								toggle = 1;
								Ext.getCmp("name").setValue("������...");
							}
						}
					},
		            { 	xtype: 'spacer',
		            	width: 50
		            }															
					]
				},
	            { 	xtype: 'spacer',
	            	height: 20
	            }],
			}],
	          
	    });	
    }
});


