module.exports =  //3628800
    function getZerosCount(number,base) {
        prime = [2,3,5,7,11,13,17,19,23,29,31,37,
            41,43,47,53,59,61,67,71,73,79,83,89,
            97,101,103,107,109,113,127,131,137,139,149,151,
            157,163,167,173,179,181,191,193,197,199,211,223,
            227,229,233,239,241,251,257,263,269,271,277,281];
        prime_factorization = [];
        for (var i=0; i<60; i++)
        {
            prime_factorization[i]=0;
        }
        temp=base;
        result = 0;
        while (temp!=1)
        {
            for (var i=0; prime[i]<base+1;i++)
            {
                if (temp%prime[i]==0)
                {
                    temp=temp/prime[i];
                    prime_factorization [i] ++;
                }
            }
        }
        for (var i=59; i>-1; i--)
        {
            if (prime_factorization[i]!=0)
            {

                result+= parseInt( (getZerosCountMin (number, parseInt(prime[i]) ))/prime_factorization[i]) ;
                i=-1;
            }
        }
        function getZerosCountMin (number, elem)
        {
            res = 0;
            del=elem;
            k= number/del;
            while (k>0.5)
            {
                res+= parseInt(k);
                del*=elem;
                k=number/del;
            }
            return res;
        }
        return result;

    };
