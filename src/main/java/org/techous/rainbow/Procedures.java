package org.techous.rainbow;

interface Procedures
{
    public String get(String value);

    public String getFormat(String format);
    public String getColor(String color);
    public String getBG(String background);
    public String getFormatColor(String format, String color);
    public String getFormatBG(String format, String background);
    public String getColorBG(String color, String background);
    public String getRainbow(String format, String color, String background);

    public String getFormatString(String format, String str, boolean end);
    public String getColorString(String color, String str, boolean end);
    public String getBGString(String background, String str, boolean end);
    public String getFormatColorString(String format, String color, String str, boolean end);
    public String getFormatBGString(String format, String background, String str, boolean end);
    public String getColorBGString(String color, String background, String str, boolean end);
    public String getRainbowString(String format, String color, String background, String str, boolean end);
}