function solution(inputString) {
    charNUmbers = inputString.length;

    var isNone = (charNUmbers % 2 == 0) ? midChar = ~~(charNUmbers / 2) : midChar = (~~charNUmbers / 2) + 1;

    console.log("la palabra " + inputString + " tiene " + charNUmbers + " letras");
    console.log("la mitad de esta palabra es en la letra número " + midChar + " = "+ inputString.charAt[midChar]);

    var ban;

    for(i=0;i <= inputString; i++)
    {
        if (inputString.charAt[i]==inputString.charAt[charNUmbers-i])
            ban = true;
        else
            ban = false;

        console.log (inputString[i] + "[" + i + "] vs " + inputString[charNUmbers-i] + "[" + (charNUmbers-i) + "] = " +ban);
    }

    return ban;

}