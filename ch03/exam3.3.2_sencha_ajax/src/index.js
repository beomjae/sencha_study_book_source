Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    
    onReady: function() {

        new Ext.Panel({
            fullscreen: true,
            id: 'content',
            scroll: 'Agetical',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [
                {
                    text: 'AJAX�� �̿��� JSON����Ÿ ��������',
                    handler: function()
                    {
                        Ext.Ajax.request({
                            url: 'ajaxdata.jsp',
                            success: function(response, opts) {
                                var JsonData = JSON.parse(response.responseText);
                                console.log(response.responseText);
                                console.log(JsonData);
                                Ext.getCmp('ResponseText').setValue(response.responseText);
                                Ext.getCmp('Name').setValue(JsonData.Name);
                                Ext.getCmp('Age').setValue(JsonData.Age);
                                Ext.getCmp('Skill1').setValue(JsonData.Skills[0].Skill);
                                Ext.getCmp('Skill2').setValue(JsonData.Skills[1].Skill);
                                Ext.getCmp('Skill3').setValue(JsonData.Skills[2].Skill);
                                Ext.getCmp('Skill4').setValue(JsonData.Skills[3].Skill);
                                Ext.getCmp('Skill5').setValue(JsonData.Skills[4].Skill);

                            }
                        });                     
                    }
                }]
            }],
            
            items:[
            {
                xtype:'textfield',
                id:'ResponseText',
                label:'JSON��'
                
            },
            {
                xtype:'textfield',
                id:'Name',
                label:'�̸�'
                
            },
            {
                xtype:'textfield',
                id:'Age',
                label:'����'
                
            },
            {
                xtype:'textfield',
                id:'Skill1',
                label:'�������1'
                
            },                                    
            {
                xtype:'textfield',
                id:'Skill2',
                label:'�������2'
                
            },
            {
                xtype:'textfield',
                id:'Skill3',
                label:'�������3'
                
            },            
            {
                xtype:'textfield',
                id:'Skill4',
                label:'�������4'
                
            },            
            {
                xtype:'textfield',
                id:'Skill5',
                label:'�������5'
                
            },            
            ]
            
        });
    }
});