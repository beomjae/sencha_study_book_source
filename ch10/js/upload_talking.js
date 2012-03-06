Ext.ns("upload_talking");

upload_talking.init = function()
{
    try
    {
        upload_talking.destory();
    }
    catch(e){}
    
    upload_talking.panel = new Ext.form.FormPanel({
    
    id: 'upload_talking_panel',
    standardSubmit: true,
    html:'<iframe name="hiddenFrame" width="0" height="0" style="visibility:hidden"></iframe>',
    items: [
    {
        xtype: 'fieldset',
        title: '�����ø���',
        instructions: '������ �Է��� ������ �ø�����.',
        defaults: {
            required: true,
            labelAlign: 'left',
            labelWidth: '150'
        },  
        items:
        [{
            xtype:'hiddenfield',
            name:'reg_kind',
            value:'2',
        },
        {
            xtype:'textfield',
            name:'user_id',
            label:'����ID',
            value:common.users.getUserId(),
        },  
        {
            xtype:'textfield',
            name:'content',
            label:'����',
        },          
        {
            xtype: 'urlfield',
            id: 'fileAttach',
            name: 'fileAttach',
            label: 'Upload File',
            inputType: 'file'
        },
        {
            xtype:'button',
            text:'�ۿø���',
            handler:function()
            {
                Ext.getDom('upload_talking_panel').enctype='multipart/form-data';
                Ext.getDom('upload_talking_panel').target='hiddenFrame';    
                var form = Ext.getCmp('upload_talking_panel');
                form.target = 'uploadTalkingRsult';
                form.submit({
                    url: "./jsp/sns_talking_upload.jsp",
                    waitMsg: 'waiting..',
                    success: function(result, request) {
                    },
                    failure:function(result, request) {
                                    console.log("����");
                        console.log(result);
                        console.log(request);
                    }   
                });                 
            }
        }]
    }]
    }); 
}
