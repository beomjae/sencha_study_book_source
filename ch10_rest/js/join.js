Ext.ns("join");

join.init= function(){
    
    join.panel = new Ext.form.FormPanel({

        id: 'join_panel',
        standardSubmit: true,
        html:'<iframe name="joinHiddenFrame" width="100" height="100" style="visibility:hidden"></iframe>',
        
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'stretch'
        },
                                
        items:[{
            xtype: 'fieldset',
            title: '�����ϱ�',
            instructions: '���̵�, ��ȣ, �̸��� �Է��Ͻʽÿ�',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items:[
                {
            xtype:'hiddenfield',
            name:'inpUrl',
            value:'http://127.0.0.1:8080/book/ch10_rest/response.html',
        },          
            {            
                xtype:'textfield',
                name:'user_id',
                label:'���̵�',
                placeHolder:'���̵�',
                autoCapitalisze:true,
                useClearIcon:false
            },{
                xtype:'passwordfield',
                name: 'user_pwd',
                placeHolder:'������ȥ�� 6��',
                label: '��ȣ',
                useClearIcon:true
            },{            
                xtype:'textfield',
                name:'user_name',
                label:'�̸�',
                placeHolder:'�̸�',
                autoCapitalisze:true,
                useClearIcon:false
            },{
                xtype: 'urlfield',
                id: 'fileAttach',
                name: 'user_img',
                label: '�����ʻ���',
                inputType: 'file'
            },{
                xtype:'button',
                text:'�����ϱ�',
                handler:function()
                {
                    
                    Ext.getDom('join_panel').enctype='multipart/form-data';                 
                    Ext.getDom('join_panel').target='joinHiddenFrame';  
                    var form = Ext.getCmp('join_panel');
                    form.submit({
                         url: '/RestService/jersey/login/create',
                        waitMsg: 'waiting..',
                                    success: function(result, request) {
                                        console.log("����");
                            console.log(result);
                            console.log(request);
                        },
                        failure:function(result, request) {
                                        console.log("����");
                            console.log(result);
                            console.log(request);
                        }                   
                    }
                    
                    );  
                    setTimeout('join.panel.check()', 1000);             
                }
            }]
           }], 
           check:function()
           {
                
                console.log(document.joinHiddenFrame);
                if(document.joinHiddenFrame)
                {
                    setTimeout('join.panel.check()', 5000);
                }
           }        
    }); 
}



