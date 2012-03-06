Ext.ns("reg_talking");

reg_talking.panel = new Ext.form.FormPanel({
    useCurrentLocation: true,               
    scroll:'vertical',
    cardSwitchAnimation:"cube",
                    
    items:[{
        xtype: 'fieldset',
        title: '�۾���',
        instructions: '������ �Է��ϼ���',
        defaults: {
            required: true,
            labelAlign: 'left',
            labelWidth: '0'
        },
        items:[{
            
            xtype:'textareafield',
            id:'reg_talking.content',
            label:'',
            placeHolder:'�۾���',
        },{
            layout: {
                type: 'hbox',
                pack: 'center',
            },  
            flex: 2, style: 'margin: .5em;',                
            items:[{
                xtype:'button',
                ui: 'decline-round',
                name:'regtalking.reg',
                handler:function(){                 
                    Ext.Ajax.request({
                        url: './jsp/sns_talking_reg.jsp?user_id=' + 
                        common.users.getUserId() + 
                        '&content=' + 
                        Ext.getCmp("reg_talking.content").getValue(),
                        success: function(response, opts) {
                            var JsonData = JSON.parse(response.responseText);
                            if(JsonData.data.err == "")
                            {
                                    alert('����Ͽ����ϴ�.');
                                    talking.init();
                                    main.panel.layout.setActiveItem(talking.panel);
                                    talking.panel.refreshAll();    
                            }
                            else
                            {
                                alert(JsonData.data.err);
                            }                            
                        }
                    });                     
                },    
                text:'���'
            },{ 
                            xtype:'spacer',width:'10%'
            },{
                xtype:'button',
                ui: 'decline-round',
                name:'reg_talking.close',
                text:'���',
                handler:function(){   
            main.panel.layout.setActiveItem(talking.panel); 
                    talking.panel.refreshAll();                     
                }
            }]                                       
        }]
    }],         
}); 