<%@ page contentType="text/html;charset=euc-kr"  pageEncoding="euc-kr" %>

�׽�Ʈ 
<%
try
{
		// ���� 
		// ��������
		String Lst_Input = "1234567��-��345678901234567890";
		
		// �ڸ�������
        int[] Li_Array = { 1,  3,  1,  1,  1, 5,  6,  7 };
		
		// ������ ����
		String[] Lst_Fields = new String[8];
		
		// Token��� ���
        for(int i=0; i< 8; i++)
        {
            Lst_Fields[i] = M_getField(Lst_Input, Li_Array, i);
		}

		// Ȯ��..
		/*
		for(int i=0; i<8; i++)
		{
			out.println( i + ":" + Lst_Fields[i]);
		}
		*/

}
catch(Exception exTemp)
{
	out.println(exTemp.toString());
}
%>

<%!
    public static String M_getField(String Pst_String, int[] Pi_Array, int Pi_Cnt)
        throws Exception
    {
        int Li_ArraySum = 0;
        for(int i=0; i< Pi_Cnt; i++)
        {
            Li_ArraySum = Li_ArraySum + Pi_Array[i];
        }
        return getByteSubstring(Pst_String, Li_ArraySum, Li_ArraySum + Pi_Array[Pi_Cnt]);
    }
    
	public static String getByteSubstring(String Pst_Input,  int Li_Start, int Li_End)
		throws Exception 
	{
		
		byte[] Lb_Byte = Pst_Input.getBytes();
		byte[] Lb_Temp  = new byte[Li_End- Li_Start];
		for(int i = Li_Start; i< Li_End;i++)
		{
			Lb_Temp[i-Li_Start] = Lb_Byte[i];
		}
		String Lst_Temp = new String(Lb_Temp);
		
		return Lst_Temp;
	}
    
  	public static String getAsciiString( String strInput) 
  		throws	Exception
  	{
     	// System 390 EBCDIC
     	String encoding = "Cp1047";

	 	byte[] inputByte = strInput.getBytes();
     	//byte[] ebcdic = unicode.getBytes( encoding );
     	return new String( inputByte, encoding );

  	}
 
%>    