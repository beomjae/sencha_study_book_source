Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.regModel('Sex', {
            fields: [
                {name: 'sex',     type: 'string'},
                {name: 'title',    type: 'string'}
            ]
        });
        var sexStore = new Ext.data.JsonStore({
           data : [
                { sex : '1', title : '��'},
                { sex : '2', title : '��'}
           ],
           model : 'Sex',
           autoLoad : true,
           autoDestroy : true
        });
        var form = new Ext.form.FormPanel({
            fullscreen:true,        
            scroll: 'vertical',
            standardSubmit : false,
            items: [{
                    xtype: 'fieldset',
                    title: '�Ի�������',
                    instructions: '�� �׸��� ��� �λ�ο� �����ϼ���.',
                    defaults: {
                        required: true,
                        labelAlign: 'left',
                        labelWidth: '150'
                    },
                    items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        label: '�̸�',
                        useClearIcon: true,
                        autoCapitalize : true
                    }, {
                        xtype: 'datepickerfield',
                        name : 'birthday',
                        label: '�������',
                        useClearIcon: false
                    },{
                        xtype: 'checkboxfield',
                        name : 'cool',
                        label: '���ʿ���',
                        value: true
                    }, {
                        xtype: 'spinnerfield',
                        name : 'spinner',
                        label: '���'
                    }, {
                        layout:
                        {
                            type:'hbox',                    
                        },
                        width:'100%',
                        items:[
                        {
                            xtype: 'selectfield',
                            name : 'sex',
                            width: '60%',
                            labelWidth:150,
                            label: '����',
                            valueField : 'sex',
                            displayField : 'title',                       
                            store : sexStore
                        }, {
                            xtype: 'numberfield',
                            name: 'number',
                            labelWidth:'50%',
                            label: '����',
                            width: '40%',
                            value:20,
                            maxValue : 20,
                            minValue : 2
                        }]
                    }, {
                        xtype: 'emailfield',
                        name : 'email',
                        label: 'E-����',
                        placeHolder: 'hong_kil_dong@google.com',
                        useClearIcon: true
                    }, {
                        xtype: 'urlfield',
                        name : 'url',
                        label: 'Ȩ������',
                        placeHolder: 'http://www.hong_kil_dong.com',
                        useClearIcon: true
                    }, {
                        xtype: 'sliderfield',
                        name : 'height',
                        value:5000,
                        maxValue: 10000,
                        minValue: 2000,
                        label: '�������'
                    }, {
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                        
                        },                      
                        items:[{
                            xtype: 'button',
                            name: 'number',
                            width:100,
                            bgcolor:'red',
                            align:'center',
                            text: '���',
                            handler:function()
                            {
                                alert("����մϴ�.");
                            }
                        },
                        { 
                        	xtype:'spacer',width:'10%'
                        }, 
                        {
                            xtype: 'button',
                           
                            name: 'number',
                            width:100,
                            text: '���',
                            handler:function()
                            {
                                alert("����մϴ�.");
                            }
                        }]
                    }]
            }]
        });
    }
});