Ext.ns("login");

login.panel = new Ext.form.FormPanel({
    useCurrentLocation: true,               
    scroll:'vertical',
    cardSwitchAnimation:"cube",

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
                            
    items:[{
        xtype: 'fieldset',
        title: '�α���',
        instructions: '���̵�� ��ȣ�� �Է��Ͻʽÿ�',
        defaults: {
            required: true,
            labelAlign: 'left',
            labelWidth: '40%'
        },
        items:[{
            
            xtype:'textfield',
            id:'login.user_id',
            label:'���̵�',
            placeHolder:'������ȣ',
            autoCapitalisze:true,
            useClearIcon:false
        },{
            xtype:'passwordfield',
            id: 'login.user_pwd',
            placeHolder:'������ȥ�� 6��',
            label: '��ȣ',
            useClearIcon:true
        },{
            layout: {
                type: 'hbox',
                pack: 'center',
                
            },  
            flex: 2, style: 'margin: .5em;',                
            items:[{
                xtype:'button',
                ui: 'decline-round',
                id:'login.reg',
                handler:function(){                 

                    Ext.Ajax.request({
                        url: './jsp/sns_login.jsp?user_id=' + Ext.getCmp("login.user_id").getValue() + '&user_pwd=' + Ext.getCmp("login.user_pwd").getValue(),
                        success: function(response, opts) {
                            console.log(Ext.getCmp("login.user_id"));
                            console.log(response.responseText + Ext.getCmp("login.user_id").value);
                            var JsonData = JSON.parse(response.responseText);
                            console.log(JsonData);
                            if(JsonData.data.err == "")
                            {
                                if(JsonData.data.longYn == "N")
                                {
                                    alert(JsonData.data.err);
                                }
                                else
                                {
                                    alert('�α��� ����!!');
                                    Ext.getCmp('main.login').hide();
                                    Ext.getCmp('main.logout').show();                                    
                                    common.users.setUserId(Ext.getCmp("login.user_id").getValue());
                                    common.users.setUserName(JsonData.data.userName);
                                                                
                                    talking.init();
                                    main.panel.layout.setActiveItem(talking.panel);
                                    talking.panel.refreshList();                                    
                                }
                            }
                            else
                            {
                                alert(JsonData.data.err);
                            }                            
                        }
                    });                     
                },    
                text:'�α���'
            }]                                       
        }]
    }],         
}); 