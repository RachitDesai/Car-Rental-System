<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
    <head>
    </head>
    <body>
    <h1 style="text-align:center">Employee Managment System</h1>
    <table border = "1" align="center">
        <tr bgcolor = "Green">
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>salary</th>
            <th>email</th>
            <th>mobile</th>
            <th>designation</th>
            <th>promotion</th>
        </tr>
        <xsl:for-each select="company/employee">
            <xsl:sort select="name"/>
            <tr>
                <td><xsl:value-of select="id"/></td>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="age"/></td>
                <td><xsl:value-of select="salary"/></td>
                <td><xsl:value-of select="email"/></td>
                <td><xsl:value-of select="mobile"/></td>
                <td><xsl:value-of select="designation"/></td>
                <td><xsl:value-of select="promotion"/></td>
            </tr>
        </xsl:for-each>
        </table>
        </body>
        </html>
    </xsl:template>
    </xsl:stylesheet>