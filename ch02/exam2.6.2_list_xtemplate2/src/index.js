Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
        Ext.regModel('company', {
            fields: ['pic', 'companygrade', 'companyclass', 'name', 'history']
        });

        Ext.regModel('history', {
            fields: ['degree']
        });

        var itemTemplate = new Ext.XTemplate(
            '<tpl for=".">',
                '<div><table border="1" width="100%" ><tr><td rowspan="2" width="25%">({#})<img src="{pic}" height=70></td><td> {[this.getDegree("�Ķ�")]} ����:{companygrade}</td><td>�μ�:{companyclass}</td></tr><td colspan="2">�̸�: <B>{name}</B>',
                '<tpl for="history">',
                    '<small> {[xindex]}/{[xcount]} </small>',
                '</tpl>',                
                '</td></tr></table> </div>',            
            '</tpl>',
            {
                getDegree:function(input)
                {
                    if(input=="�Ķ�")
                        return '<font color="blue">';
                    else 
                        return '';
                }           
            }        
        ); 
        
        
        company_list = new Ext.List({
            fullscreen:true,
            itemTpl: itemTemplate,

            store: new Ext.data.Store({
                model: 'company',
                sorters: 'companygrade',
             
                data: [
                    {pic:'./img/psn1.png', companygrade: '���', companyclass: '����1��', name: 'ȫ�浿', history:[{degree:'���'}]},
                    {pic:'./img/psn2.png', companygrade: '�븮', companyclass: '����2��', name: '�Ӳ���',history:[{degree:'����'},{degree:'�븮'}]},
                    {pic:'./img/psn3.png', companygrade: '����', companyclass: '�λ��', name: '�̼���',history:[{degree:'����'},{degree:'�븮'}, ,{degree:'����'}]},
                    {pic:'./img/psn4.png', companygrade: '����', companyclass: '�ѹ���', name: '�Ѹ�' ,history:[{degree:'����'},{degree:'�븮'}, ,{degree:'����'}]}
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
