Ext.ns("join");

join.init= function(){
	
	join.panel = new Ext.form.FormPanel({

		id: 'join_panel',
		standardSubmit: true,
		html:'<iframe name="hiddenFrame" width="0" height="0"  style="visibility:hidden"></iframe>',
		
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
				name: 'fileAttach',
				label: '�����ʻ���',
				inputType: 'file'
			},{
				xtype:'button',
				text:'�����ϱ�',
				handler:function()
				{
					Ext.getDom('join_panel').enctype='multipart/form-data';					
					Ext.getDom('join_panel').target='hiddenFrame';	
					var form = Ext.getCmp('join_panel');
					form.submit({
						url: "./jsp/sns_join.jsp",
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
					});					
				}
			}]
	    }],         
	}); 
}



