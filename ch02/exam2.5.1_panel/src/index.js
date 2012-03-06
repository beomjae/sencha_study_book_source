Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var panel = new Ext.Panel({
            fullscreen: true,
            dockedItems:[
                {
                    dock : 'top',
                    style:'background-color:blue;;font-size:40px',
                    xtype: 'panel',
                    html: 'TOP'
                },
                {
                    dock : 'bottom',
                    xtype: 'panel',
                    style:'background-color:green;font-size:40px',
                    html: '<font color="yellow">BOTTOM</font>'
                }               
            ],
            html: 'Panel �����Դϴ�.<BR>�̰��� ���ڰ� �������ϴ�.'  + 
                  '<BR><font color="red">���� ������ �����?</font>' + 
                  '<BR><BR><BR><center><img src="./img/user.png" width=100>'
        });    
    }
});
