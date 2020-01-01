package org.techous;

import org.techous.rainbow.Rainbow;

public class App 
{
    public static void main( String[] args )
    {
        Rainbow rainbow = new Rainbow();
        System.out.println(rainbow.getBG("lwhite")+"Hello World"+rainbow.getFormat("reset"));
    }
}
