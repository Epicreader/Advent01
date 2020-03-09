//These are all of the numbers
var mod = [
    147308
    , 51605
    , 71317
    , 110882
    , 92545
    , 126856
    , 104937
    , 92433
    , 107850
    , 119538
    , 82733
    , 52216
    , 105704
    , 123682
    , 105919
    , 136265
    , 100540
    , 84245
    , 72006
    , 111652
    , 85116
    , 85841
    , 71374
    , 144196
    , 125493
    , 113529
    , 64637
    , 87489
    , 138161
    , 120897
    , 53384
    , 83310
    , 126144
    , 120672
    , 107681
    , 101369
    , 77469
    , 141056
    , 140426
    , 114920
    , 124454
    , 130867
    , 64611
    , 104813
    , 138808
    , 114234
    , 148654
    , 59031
    , 91367
    , 83316
    , 106192
    , 127495
    , 139980
    , 119024
    , 149567
    , 57007
    , 61075
    , 65637
    , 75293
    , 61670
    , 104044
    , 77230
    , 80201
    , 137094
    , 99733
    , 50801
    , 68922
    , 148404
    , 79980
    , 62716
    , 67666
    , 72694
    , 81951
    , 108427
    , 111721
    , 55532
    , 94442
    , 88562
    , 101088
    , 111656
    , 111649
    , 92085
    , 91730
    , 114744
    , 59355
    , 55842
    , 100926
    , 146370
    , 147829
    , 62160
    , 91447
    , 115745
    , 141815
    , 106837
    , 68151
    , 89077
    , 60357
    , 89856
    , 75040
    , 139131];
//This is a global variable I can use to keep track of all of the numbers and add them together
var sum = 0;
// These are two loops I have there is a better way to do this but I can't think of it and this works. The first for loop goes through all of the numbers and changes them to the right values, the nested while loop goes through the correct values and adds them to my global variable add then changes the number again and keeps adding the changed number until the number is below zero that it is supposed to add  
for (i = 0; i < mod.length; i++) {
    var real = (Math.floor(mod[i] / 3) - 2);
    while (real > 0) {
        sum += real;
        real = (Math.floor(real / 3) - 2)
    }
}
//This is how I see the number
console.log(sum);