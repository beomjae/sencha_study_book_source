function initSecondPanel()
{
    secondPanel = new Ext.Panel(
    {
		fullscreen: true,
		layout: {
			type: 'vbox',
			pack: 'center',
		
		},            
		items: [
		{
		    xtype: 'fieldset',
		    title: '�ι�° ������',
		    instructions: 'Sencha Touch �������̵�',			           
		    items:[
		    { 	xtype: 'spacer',
		    	height: 50
		    },		            
			{
				xtype:'button',
				width:200,
				text:'ù��° ������ ȣ��',
				handler:function(){
					showFirstPanel();					
				}
			},
		    { 	xtype: 'spacer',
		    	height: 50
		    }],
		}],		
	});
}

