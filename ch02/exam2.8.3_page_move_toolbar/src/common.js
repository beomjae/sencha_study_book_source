/*************************************************
*
* file: common.js
* 
* ����: ���� Panel�� �����Ѵ�.
*
**************************************************/


var MainPanel;

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

