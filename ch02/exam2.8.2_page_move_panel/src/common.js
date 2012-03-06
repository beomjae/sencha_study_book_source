/*************************************************
*
* file: common.js
* 
* ����: ���� Panel�� �����Ѵ�.
*
**************************************************/

Ext.setup({
    icon: 'icon.png',
    glossOnIcon: false,
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    onReady: function() {
        initFirstPanel();
        initSecondPanel();
        showFirstPanel();
    }
});


// ù��° �ǳ�
var FirstPanel;

// �ι�° �ǳ�
var SecondPanel;

// ù��° �ǳ� �����ֱ�
function showFirstPanel()
{
	FirstPanel.show();
	SecondPanel.hide();
}

// �ι�° �ǳ� �����ֱ�
function showSecondPanel()
{
	SecondPanel.show();
	FirstPanel.hide();
}

