<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
    <head>
        <title>Customer</title>
    </head>
    <body bgcolor="#FFE5B4" >
    <h1 style="text-align:center">Car Rental System</h1>
    <h4 style="text-align:center">Customers</h4>
    <table border = "1" align="center">
        <tr bgcolor = "Green">
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Eligibilty</th>
        </tr>
        <xsl:for-each select="CarRental/Customer">

            <xsl:if test="age &gt; 15">
            
                <tr>
                    <td><xsl:value-of select="id"/></td>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="age"/></td>
                    <td><xsl:value-of select="email"/></td>
                    <td><xsl:value-of select="mobile"/></td>
                    <td>
		                <xsl:choose>
		                    <xsl:when test="age &lt; 18 ">You are too small to access this Services</xsl:when>
                            <xsl:when test="age &gt; 70 ">You are too old to access this services </xsl:when>
				            <xsl:otherwise>You are eligibile for our Services</xsl:otherwise>
				        </xsl:choose>
	                </td>
                </tr>
            </xsl:if>
        </xsl:for-each>
    </table>


    <h4 style="text-align:center">Vehicle</h4>

    <table border="2" align="center" >
					<tr bgcolor= '#ADD8E6'>
						<th>Number</th>
		                <th>Name </th>
		                <th>Type</th>
		                <th>Fare</th>
                        <th>Availability</th>
		            </tr>
		            <xsl:for-each select="CarRental/Vehicle">
		            	<xsl:sort select="Name" order="ascending"/>
		            	
		                	<tr>
		                		<td>
		                			<xsl:value-of select="Number"/>
		                		</td>
		                		<td>
		                			<xsl:value-of select="Name"/>
		                        </td>
                                <td>
		                            <xsl:value-of select="Type"/>
		                        </td>
		                        <td>
		                            <xsl:value-of select="Fare"/>
		                        </td>
		                        <td>
                                        <xsl:choose>
		                        		<xsl:when test="Type != 'Car'">Available</xsl:when>
									    <xsl:otherwise>Not vailable</xsl:otherwise>
							        </xsl:choose>
						        </td>

					    </tr>
		            </xsl:for-each>
		        </table>
    </body>
    </html>
    </xsl:template>
    </xsl:stylesheet>