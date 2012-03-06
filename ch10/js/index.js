Ext.ns("main");

Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
    main.panel = new Ext.Panel({
        fullscreen: true,
        scroll: 'Agetical',
        layout:'card',
        resultLogOutMsg:function(btn,text)
        {
            if(btn=='yes')
            {
                userId = common.users.removeUserId();
                userName= common.users.removeUserName();       
                Ext.getCmp('main.login').show();
                Ext.getCmp('main.logout').hide();
                main.panel.layout.setActiveItem(login.panel);
            }
        },
        dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
            {
                text: '�α���',
                id:'main.login',
                handler: function()
                {
                    main.panel.layout.setActiveItem(login.panel);
                    login.panel.doLayout();   
                }
            },
            {
                text: '�α׾ƿ�',
                id:'main.logout',
                handler: function()
                {
                    Ext.Msg.confirm('Ȯ��','�α׾ƿ� �Ͻðڽ��ϱ�?',
                    main.panel.resultLogOutMsg);
                            
                }
            },                
            {
                text: 'Talk',
                handler: function()
                {
                    talking.init();
                    main.panel.layout.setActiveItem(talking.panel);
                    talking.panel.refreshAll(); 
                    talking.panel.doLayout();   
                }                   
            },
            {
                text: '�����ϱ�',
                handler: function()
                {  
                    join.init();                     
                    main.panel.layout.setActiveItem(join.panel);  
                }
            }]
        }
        ],
    });
    main.panel.layout.setActiveItem(init.panel);      
    var userId="";
    var userName="";
    if(common.users.getUserId() != undefined)
    {
        userId = common.users.getUserId();
        userName= common.users.getUserName();
        Ext.Msg.alert('�ڵ��α���', userName + "�� �ݰ����ϴ�.");
        Ext.getCmp('main.login').hide();
        Ext.getCmp('main.logout').show();
    }
    else
    {
        Ext.getCmp('main.login').show();
        Ext.getCmp('main.logout').hide();
    }
    
    }
});