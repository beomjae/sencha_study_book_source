Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
        Ext.regModel('company', {
            fields: ['company_grade', 'company_class', 'name']
        });
		var company_list = new Ext.List({
	
			fullscreen:true,
			itemTpl: '<div>����:{company_grade} �μ�:{company_class} �̸�: <B>{name}</B> </div>',
            onItemDisclosure: {
                handler: function(record, btn, index) {
                    alert('����:' + record.get('company_grade') + ' �μ�:' + record.get('company_class') + ' �̸�:'  + record.get('name') + "���� �����ϼ̽��ϴ�.. , index:" + index);
                }
            },

            store: new Ext.data.Store({
                model: 'company',
                sorters: 'company_class',
                data: [
                    {company_grade: '����', company_class: '������', name: 'ȫ�浿'},
                    {company_grade: '����', company_class: '�ѹ���', name: '�Ӳ���'},
                    {company_grade: '����', company_class: '������', name: '�̼���'},
                    {company_grade: '����', company_class: '�ѹ���', name: '�ָ�'},
                    {company_grade: '�븮', company_class: '������', name: '�տ���'},
                    {company_grade: '�븮', company_class: '�ѹ���', name: '���Ȱ�'},
                    {company_grade: '���', company_class: '������', name: '�����'},
                    {company_grade: '���', company_class: '������', name: '�����'},
                    {company_grade: '���', company_class: '�ѹ���', name: '��ȭ'},
                    {company_grade: '���', company_class: '�ѹ���', name: 'ȫ��'},
                ]
            })
    	});
        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
		        pack: 'center',

            },
            items: company_list
        });    	
	}
});
