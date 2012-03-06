Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.regModel('User', {
            fields: [
                {name: 'id', type: 'int'},
                {name: 'name',  type: 'string'},
                {name: 'tel',       type: 'string'}
            ],
            proxy: {                
                type: 'rest',
                url:'/RestService/jersey/login/01234567/11111111',
                reader: {
                    type: 'json',
                    root: 'users'
                }
            },          
        });
        
        var myStore = new Ext.data.Store({
            model: 'User',
            autoLoad: true
        });
		console.log(myStore);
		             
        list = new Ext.List({
            store:myStore,
            height:'400',
            itemTpl:'<div>{id} {name} {tel} </div>',
        });        

        new Ext.Panel({
            fullscreen: true,
            layout:'fit',
            id: 'content',
            scroll: 'Agetical',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                title: '���������� �⺻II',
            }],
            items:[
            {
                xtype:'fieldset',
                instructions: 'PROXY �˾ƺ���',
                items:list,
            }]
            
        });
    }
});