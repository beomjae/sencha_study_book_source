Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    
    onReady: function() {
        
        var SkillList;
        var SkillStore;
        var SkillModel;
        
        Ext.regModel('Skills', {
            fields: ['Skill']
        });     

        SkillStore = new Ext.data.Store({
            model :'Skills',
            data:[
                    // ����
            ],
        });     
        
        SkillList = new Ext.List({
            id:'SkillList',
            store:SkillStore,                       
            onItemDisclosure: {
                handler: function(record, btn, index) {
                    alert(record.get('Skill') + "���� index:" + index);
                }
            },
            itemTpl:'<div><strong>{Skill}</strong></div>',
        });        
 
        function getSkillsList(Jv_data) {
            SkillStore = new Ext.data.Store({
                model :'Skills',
                data:Jv_data,
            });
            Ext.getCmp('SkillList').bindStore(SkillStore);  
        };
                    
        new Ext.Panel({
            fullscreen: true,
            id: 'content',
            scroll: 'Agetical',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [
                {
                    text: 'AJAX�� �̿��� JSON����Ÿ ��������(PROXY����)',
                    handler: function()
                    {
                        Ext.Ajax.request({
                            url: 'ajaxdata.jsp',
                            success: function(response, opts) {
                                var JsonData = JSON.parse(response.responseText);
                                Ext.getCmp('Name').setValue(JsonData.Name);
                                Ext.getCmp('Age').setValue(JsonData.Age);
                                console.log(JsonData.Skills);
                                console.log(JSON.stringify(JsonData.Skills));
                                getSkillsList(JsonData.Skills);
                            }
                        });                     
                    }
                }]
            }],
            items:[
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
                xtype:'fieldset',
                instructions: '����Ʈ�� ��ȸ�մϴ�.',
                items:SkillList,                
            }]
        });
    }
});