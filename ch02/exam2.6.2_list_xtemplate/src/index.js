Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
        Ext.regModel('company', {
            fields: ['company_grade', 'company_class', 'name']
        });

		var itemTemplate = new Ext.XTemplate(
	        '<tpl for=".">',
	        	'<tpl if="company_grade==\'����\'">',
	            '<div><table border="1" width="100%"bgcolor="yellow"><tr><td>����:{company_grade}</td><td>�μ�:{company_class}</td></tr><td colspan="2">�̸�: <B>{name}</B></td></tr></table> </div>',            
	            '</tpl>',
	        	'<tpl else if="company_grade==\'����\'">',
	            '<div><table border="1" width="100%"bgcolor="white"><tr><td>����:{company_grade}</td><td>�μ�:{company_class}</td></tr><td colspan="2">�̸�: <B>{name}</B></td></tr></table> </div>',            
	            '</tpl>',
	        	'<tpl else if="company_grade==\'�븮\'">',
	            '<div><table border="1" width="100%"bgcolor="lightgreen"><tr><td>����:{company_grade}</td><td>�μ�:{company_class}</td></tr><td colspan="2">�̸�: <B>{name}</B></td></tr></table> </div>',            
	            '</tpl>',
	        	'<tpl else if="company_grade==\'���\'">',
	            '<div><table border="1" width="100%"bgcolor="lightblue"><tr><td>����:{company_grade}</td><td>�μ�:{company_class}</td></tr><td colspan="2">�̸�: <B>{name}</B></td></tr></table> </div>',            
	            '</tpl>',            
	        '</tpl>'
	    );        
		var company_list = new Ext.List({
	
			fullscreen:true,
            grouped: true,
            indexBar: true,
			onItemDisclosure: false,
			itemTpl:itemTemplate,

            store: new Ext.data.Store({
                model: 'company',
                sorters: 'company_class',
                getGroupString : function(record) {
                    return record.get('company_class')[0] + " �μ��� ���� ";
                },                
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



