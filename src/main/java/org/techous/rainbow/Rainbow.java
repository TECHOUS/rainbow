package org.techous.rainbow;

import org.techous.rainbow.Codes;
import org.techous.rainbow.Procedures;

import java.util.*;
public class Rainbow implements Procedures
{
    private final String START_STRING   = "\u001B[";
    private final String END_STRING     = "m";
    private final String DELIMETER      = ";";

    private final Map<String, String> Rain = new HashMap<String, String>();

    /**
     * This function will create a  colors mapping you need
     * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     **/
    public Rainbow(){
        // Rain Formats
        Rain.put("reset",       Codes.RESET);
        Rain.put("bold",        Codes.BOLD);
        Rain.put("italic",      Codes.ITALIC);
        Rain.put("underline",   Codes.UNDERLINE);
        Rain.put("blink",       Codes.BLINK);
        Rain.put("cut",         Codes.CUT);
        Rain.put("doubleline",  Codes.DOUBLELINE);
        Rain.put("overline",    Codes.OVERLINE);
        Rain.put("hidden",      Codes.HIDDEN);

        // Rain Colors
        Rain.put("D", Codes.DEFAULT);
        Rain.put("Lg", Codes.LGREEN);
        Rain.put("Mg", Codes.MGREEN);
        Rain.put("Dg", Codes.DGREEN);
        Rain.put("Lr", Codes.LRED);
        Rain.put("Dr", Codes.DRED);
        Rain.put("Lw", Codes.LWHITE);
        Rain.put("Dw", Codes.DWHITE);
        Rain.put("Lb", Codes.LBLUE);
        Rain.put("Db", Codes.DBLUE);
        Rain.put("Lc", Codes.LCYAN);
        Rain.put("Dc", Codes.DCYAN);
        Rain.put("o", Codes.ORANGE);
        Rain.put("b", Codes.BLACK);
        Rain.put("m", Codes.MAGENTA);
        Rain.put("y", Codes.YELLOW);
        Rain.put("l", Codes.LEMON);
        Rain.put("p", Codes.PINK);

        // Rain Backgrounds
        Rain.put("dgreen", Codes.BGDGREEN);
        Rain.put("lgreen", Codes.BGLGREEN);
        Rain.put("mgreen", Codes.BGMGREEN);
        Rain.put("dred", Codes.BGDRED);
        Rain.put("lred", Codes.BGLRED);
        Rain.put("dorange", Codes.BGDORANGE);
        Rain.put("lorange", Codes.BGLORANGE);
        Rain.put("lblue", Codes.BGLBLUE);
        Rain.put("lwhite", Codes.BGLWHITE);
        Rain.put("dwhite", Codes.BGDWHITE);
        Rain.put("lemon", Codes.BGLEMON);
        Rain.put("mpink", Codes.BGMPINK);
        Rain.put("dpink", Codes.BGDPINK);
        Rain.put("lpink", Codes.BGLPINK);
    }

    /**
     * This function will return the color code from Rain map
     *
     * @param key
     * @return the color code from Rain map
     **/
    private String getRain(String key){
        if(Rain.containsKey(key)){
            return Rain.get(key);
        }
        return null;
    }

    /**
     * this function will return the all the rainbow combinations
     *
     * @param value :
     * FORMATS (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * COLORS (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * BACKGROUNDS (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return rainbowed codes
     **/
    public String get(String value){
        if(value == null){
            return null;
        }
        switch(value){
            case "reset":
            case "bold":
            case "italic":
            case "underline":
            case "blink":
            case "cut":
            case "doubleline":
            case "overline":
            case "hidden":
            case "D":
            case "Lg":
            case "Mg":
            case "Dg":
            case "Lr":
            case "Dr":
            case "Lw":
            case "Dw":
            case "Lb":
            case "Db":
            case "Lc":
            case "Dc":
            case "o":
            case "b":
            case "m":
            case "y":
            case "l":
            case "p":
            case "dgreen":
            case "lgreen":
            case "mgreen":
            case "dred":
            case "lred":
            case "dorange":
            case "lorange":
            case "lblue":
            case "lwhite":
            case "dwhite":
            case "lemon":
            case "mpink":
            case "dpink":
            case "lpink":
                StringBuilder result = new StringBuilder("");
                if(getRain(value)!=null){
                    result.append(this.START_STRING);
                    result.append(getRain(value));
                    result.append(this.END_STRING);
                }
                return result.toString();
        }
        return null;
    }

    /**
     * this function will check whether the format passed is correct or not
     *
     * @param format checking format
     * @return boolean
     **/
    private boolean checkFormat(String format){
        if(format==null || format.equals("")){
            return false;
        }
        switch(format){
            case "reset":
            case "bold":
            case "italic":
            case "underline":
            case "blink":
            case "cut":
            case "doubleline":
            case "overline":
            case "hidden":
                return true;
        }
        return false;
    }

    /**
     * this function will check whether the color passed is correct or not
     *
     * @param color to check
     * @return boolean
     **/
    private boolean checkColor(String color){
        if(color==null || color.equals("")){
            return false;
        }
        switch(color){
            case "D":
            case "Lg":
            case "Mg":
            case "Dg":
            case "Lr":
            case "Dr":
            case "Lw":
            case "Dw":
            case "Lb":
            case "Db":
            case "Lc":
            case "Dc":
            case "o":
            case "b":
            case "m":
            case "y":
            case "l":
            case "p":
                return true;
        }
        return false;
    }

    /**
     * this function will check whether the background is correct or not
     *
     * @param background
     * @return boolean
     **/
    private boolean checkBG(String background){
        if(background==null || background.equals("")){
            return false;
        }
        switch(background){
            case "dgreen":
            case "lgreen":
            case "mgreen":
            case "dred":
            case "lred":
            case "dorange":
            case "lorange":
            case "lblue":
            case "lwhite":
            case "dwhite":
            case "lemon":
            case "mpink":
            case "dpink":
            case "lpink":
                return true;
        }
        return false;
    }

    /**
     * Returns the format code you need to change the string format
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @return formatted code
     **/
    public String getFormat(String format){
        if(checkFormat(format)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(format));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * Returns the color code for changing text to colored text
     *
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @return color codes
     **/
    public String getColor(String color){
        if(checkColor(color)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(color));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * Returns the colored background code for coloring backgrounds
     *
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return background color codes
     **/
    public String getBG(String background){
        if(checkBG(background)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(background));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return the formatted color code
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @return formatted color code
     **/
    public String getFormatColor(String format, String color){
        if(checkFormat(format) && checkColor(color)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(format));
            result.append(this.DELIMETER);
            result.append(getRain(color));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return formatted background code
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return formatted background code
     **/
    public String getFormatBG(String format, String background){
        if(checkFormat(format) && checkBG(background)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(format));
            result.append(this.DELIMETER);
            result.append(getRain(background));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return colored background code
     *
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return colored bacground code
     **/
    public String getColorBG(String color, String background){
        if(checkColor(color) && checkBG(background)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(color));
            result.append(this.DELIMETER);
            result.append(getRain(background));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return rainbowed code
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @return rainbowed code
     **/
    public String getRainbow(String format, String color, String background){
        if(checkFormat(format) && checkColor(color) && checkBG(background)){
            StringBuilder result = new StringBuilder("");
            result.append(this.START_STRING);
            result.append(getRain(format));
            result.append(this.DELIMETER);
            result.append(getRain(color));
            result.append(this.DELIMETER);
            result.append(getRain(background));
            result.append(this.END_STRING);
            return result.toString();
        }
        return null;
    }

    /**
     * This function will generate the formatted string according to the format passed
     *
     * @param format -> (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param str -> string to be formatted
     * @param end -> whether to continue using this code or not
     * @return formatted string
     **/
    public String getFormatString(String format, String str, boolean end){
        String formatCode = getFormat(format);
        if(formatCode != null){
            StringBuilder result = new StringBuilder("");
            result.append(formatCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return str;
    }

    /**
     * This function will generate the colored string according to the color passed
     * @param color -> (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param str -> string to be colored
     * @param end -> whether to continue using this code or not
     * @return colored string
     **/
    public String getColorString(String color, String str, boolean end){
        String colorCode = getColor(color);
        if(colorCode != null){
            StringBuilder result = new StringBuilder("");
            result.append(colorCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return str;
    }

    /**
     * This function will generate the filled background string according to the background passed
     * @param background -> (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite,
     * dwhite, lemon, dpink, lpink, mpink)
     * @param str -> string to be colored
     * @param end -> whether to continue using this code or not
     * @return filled background string
     **/
    public String getBGString(String background, String str, boolean end){
        String backgroundCode = getBG(background);
        if(backgroundCode!=null){
            StringBuilder result = new StringBuilder("");
            result.append(backgroundCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return str;
    }

    /**
     * this function will return the formatted colored string
     *
     * @param format -> (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color -> (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param str -> string to be colored
     * @param end -> whether to continue using this code or not
     * @return formatted color string
     **/
    public String getFormatColorString(String format, String color, String str, boolean end){
        String formatColorCode = getFormatColor(format, color);
        if(formatColorCode != null){
            StringBuilder result = new StringBuilder("");
            result.append(formatColorCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return formatted background string
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @param str -> string to be colored
     * @param end -> whether to continue using this code or not
     * @return formatted background string
     **/
    public String getFormatBGString(String format, String background, String str, boolean end){
        String formatBGCode = getFormatBG(format, background);
        if(formatBGCode != null){
            StringBuilder result = new StringBuilder("");
            result.append(formatBGCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return colored background string
     *
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @param str -> string to be colored
     * @param end -> whether to continue using this code or not
     * @return colored bacground string
     **/
    public String getColorBGString(String color, String background, String str, boolean end){
        String colorBGCode = getColorBG(color, background);
        if(colorBGCode != null){
            StringBuilder result = new StringBuilder("");
            result.append(colorBGCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return null;
    }

    /**
     * this function will return rainbowed string
     *
     * @param format (reset, bold, italic, underline, blink, cut, doubleline, overline, hidden)
     * @param color (D, Lg, Mg, Dg, Lr, Dr, Lw, Dw, Lb, Db, Lc, Dc, o, b, m, y, l, p)
     * @param background (dgreen, lgreen, mgreen, dred, lred, dorange, lorange, lblue, lwhite, dwhite, lemon, dpink, lpink, mpink)
     * @param str -> string to be colored
     * @param end -> whether to continue using this code or not
     * @return rainbowed string
     **/
    public String getRainbowString(String format, String color, String background, String str, boolean end){
        String rainbowCode = getRainbow(format, color, background);
        if(rainbowCode != null){
            StringBuilder result = new StringBuilder("");
            result.append(rainbowCode);
            result.append(str);
            if(end){
                result.append(getFormat("reset"));
            }
            return result.toString();
        }
        return null;
    }
}