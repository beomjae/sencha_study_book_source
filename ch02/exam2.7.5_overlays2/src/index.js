Ext.setup({
    icon: 'icon.png',
    glossOnIcon: false,
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    onReady: function() {
        
        var overlayToolbar = new Ext.Toolbar({
           dock: 'top'
        });

		Ext.regModel('school', {
            fields: ['schoolgrade', 'shoolclass', 'name']
        });
        
		var schoollist = new Ext.List({
			width:380,
			height:340,
			//fullscreen:true,
			itemTpl: '<div>{schoolgrade}�г�{shoolclass}�� �̸�: <B>{name}</B> </div>',
            onItemDisclosure: {
                handler: function(record, btn, index) {
                    alert(record.get('schoolgrade') + '�г�' +  record.get('shoolclass') + '�� '  + record.get('name') + " �л��� ���õǾ����ϴ�. , index:" + index);
                }
            },

            store: new Ext.data.Store({
                model: 'school',
                sorters: 'schoolgrade',
                data: [
                    {schoolgrade: '1', shoolclass: '1', name: 'ȫ�浿'},
                    {schoolgrade: '1', shoolclass: '2', name: '�Ӳ���'},
                    {schoolgrade: '1', shoolclass: '3', name: '�̼���'},
                    {schoolgrade: '1', shoolclass: '4', name: '�Ѹ�'},
                    {schoolgrade: '1', shoolclass: '5', name: '�տ���'},
                    {schoolgrade: '2', shoolclass: '1', name: '�������'},
                    {schoolgrade: '2', shoolclass: '2', name: '���۸�'},
                    {schoolgrade: '2', shoolclass: '3', name: '��Ʈ��'},
                    {schoolgrade: '3', shoolclass: '1', name: '��ȭ'},
                    {schoolgrade: '3', shoolclass: '2', name: 'ȫ��'},
                ]
            })
    	});
    	        
		var overlay = new Ext.Panel({
		
            floating: true,
            modal: true,
            centered: false,
            width: 400,
            height: 400,
            dockedItems: overlayToolbar,
			items:schoollist
    	});


        var dockedItems = [{
            dock: 'top',
            xtype: 'toolbar',
            items: [{
                text: '�л�����Ʈ �����ֱ�',
                handler: function(btn,event){
		            overlay.setCentered(false);
		            overlayToolbar.setTitle('�л�����Ʈ');
		            overlay.showBy(btn);                	
                }
            }, 
            {xtype: 'spacer'}, 
            {
                text: '�л�����Ʈ �����ֱ�',
                handler: function(btn,event){
		            overlay.setCentered(true);
		            overlayToolbar.setTitle('�л�����Ʈ');
		            overlay.show();                	
                }
            }, 
            ]
        }];
        
        new Ext.Panel({
            fullscreen: true,
            dockedItems: dockedItems,
            html: "Overlay�� �����ִ� �����Դϴ�."
        });
    }
});