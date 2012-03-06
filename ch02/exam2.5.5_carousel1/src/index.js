Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        var carousel = new Ext.Carousel({
            defaults: {
                cls: 'card'
            },
            indicator:false,
            items: [{
                title: 'Tab 1',
                html: '<center><BR><img src="./img/j.jpg" width="70%"><BR>���� : ����<BR>�̸� : J<BR>������:����</center>'
            },
            {
                title: 'Tab 2',
                html: '<center><BR><img src="./img/q.jpg" width="70%"><BR>���� : �պ�<BR>�̸� : Q<BR>������:���׸���</center>'
            },
            {
                title: 'Tab 3',
                html: '<center><BR><img src="./img/k.jpg" width="70%"><BR>���� : ��<BR>�̸� : K<BR>������:�系�Ĵ����</center>'
            }],
            listeners:{
            	cardswitch:function(){
            		console.log(carousel.getActiveItem());
            	}
            }
        });
        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center',

            },
            
            defaults: {
                flex: 1
            },
            items: carousel
        });
    }
});