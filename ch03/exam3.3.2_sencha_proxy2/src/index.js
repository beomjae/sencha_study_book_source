Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    
    onReady: function() {
        
        var SkillList;
        var SkillStore;
        var SkillProxy;
        var SkillModel;

        Ext.regModel('Skills', {
            fields: ['Skill']
        });     

        SkillProxy = new Ext.data.AjaxProxy({
            type:'ajax',
            reader:{
                type:'json',
                //Skill:"Skill",
                root:'Skills',
            }
        });         
        
        SkillStore = new Ext.data.Store({
            encode:true,
            autoLoad:true,
            fields:[
                {name:'Skill', type:'string'}
            ],
            proxy: SkillProxy               
        });   
             
        SkillList = new Ext.List({
            store:SkillStore,
            
            SelectedItemCls:'x-list-oAge',
            onItemDisclosure: {
                handler: function(record, btn, index) {
                    alert(record.get('Skill') + "���� index:" + index);
                }
            },
            itemTpl:'<div><strong>{Skill}</strong></div>',
        });        
        
        function getRankingList() {
            SkillProxy    =new Ext.data.AjaxProxy({
                url: 'ajaxdata.jsp',
                type:'ajax',               
                reader:{
                    type:'json',
                    root:'Skills',
                }
            });         
            SkillStore = new Ext.data.Store({
                encode:true,
                autoLoad:true,
                fields:[
                    {name:'Skill', type:'string'}
                ],
                proxy: SkillProxy               
            });
            SkillStore.load();
            SkillList.bindStore(SkillStore);    
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
                    text: 'PROXY�� ����� ������ ��������',
                    handler: function()
                    {
                        Ext.Ajax.request({
                            url: 'ajaxdata.html',
                            success: function(response, opts) {
                                var JsonData = JSON.parse(response.responseText);
                                Ext.getCmp('Name').setValue(JsonData.Name);
                                Ext.getCmp('Age').setValue(JsonData.Age);
                                getRankingList();
                                
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