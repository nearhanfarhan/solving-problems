const rawSeeds = `1263068588 44436703 1116624626 2393304 2098781025 128251971 2946842531 102775703 2361566863 262106125 221434439 24088025 1368516778 69719147 3326254382 101094138 1576631370 357411492 3713929839 154258863`

const rawSeedToSoil = `2056129205 3495540274 7275274
2093671499 2217398614 16037515
144190400 1167267743 4402289
685148999 560842720 46363553
148592689 1382926008 71816170
241575914 1243634776 139291232
1686196783 543577846 17264874
2601917866 2486088541 222990187
1703461657 1454742178 45658441
4200618033 2052611543 79792525
2063404479 2445531749 30267020
3026695548 4113017544 181949752
73663477 607206273 70526923
3412143232 2195535041 20126067
1381626519 809568775 38912495
4280410558 3277485604 9635485
1285511345 435930218 30230711
2009679577 4060471919 23976534
491535670 129136847 193613329
3016405776 2475798769 10289772
2035393617 2709078728 12153762
1760083914 1171670032 71964744
3988522413 2233436129 212095620
2824908053 4084448453 28569091
799335774 434222608 1707610
2109709014 3568263067 492208852
2047547379 3502815548 8581826
1275917650 466160929 9593695
731512552 475754624 67823222
380867146 698900251 110668524
1315742056 1500400619 65884463
801043384 848481270 151647344
3208645300 3292042342 203497932
952690728 0 129136847
1081827575 1000128614 167139129
0 1731434235 73663477
1749120098 423258792 10963816
2853477144 3511397374 56865693
1585688167 322750176 100508616
3432269299 2721232490 556253114
1420539014 1566285082 165149153
2973473810 2009679577 42931966
220408859 677733196 21167055
4290046043 3287121089 4921253
2033656111 2215661108 1737506
1248966704 1805097712 26950946
2910342837 2132404068 63130973`

const rawSoilToFertiliser = `3192416630 3819045895 47516706
39972266 597632895 4546595
2584201752 2580457211 100644566
2272135078 174545609 40291463
2819419661 2681101777 89335599
3239933336 3528823147 72816699
44518861 2232362178 145175982
2519969464 2377538160 64232288
1852478702 2770437376 313570784
2166049486 2441770448 106085592
4133995881 3866562601 160971415
1626150228 975660836 106177604
2908755260 422379995 175252900
3312750035 4178991584 115975712
1142288544 1324281099 483861684
833150172 1928293653 304068525
1732327832 1808142783 120150870
2684846318 39972266 134573343
3133663001 4027534016 58753629
189694843 602179490 373481346
3758375673 4086287645 92703939
3428725747 3199173221 329649926
1137218697 2547856040 5069847
4068485661 3133663001 65510220
590707513 1081838440 242442659
2312426541 214837072 207542923
563176189 2552925887 27531324
3851079612 3601639846 217406049`

const rawFertiliserToWater = `153835826 1814144363 127150990
1926426485 1614900585 14868868
2139872846 3136260217 42408895
3310771078 2202805875 59788141
83898078 1578023222 36877363
652411041 1574694502 3328720
2080480520 3785135933 59392326
3370559219 3272622808 82257970
3132498144 2037809941 164995934
2678755579 3455437189 65205729
3674754588 3844528259 234175097
2182281741 3520642918 59000325
570340096 1492623557 82070945
2779822218 2446205321 138940597
2037809941 2703025450 42670579
3515202222 2342244856 103960465
3998026660 4136896949 144793347
955105072 0 84792564
3452817189 3073875184 62385033
77176799 1459627033 6721279
4142820007 4078703356 58193593
280986816 1091602584 230166265
1701766245 1321768849 78671169
2987155826 2872940965 145342318
2418013523 3615504153 169631780
2587645303 2262594016 79650840
2667296143 3354880778 11459436
2743961308 3579643243 35860910
1880850385 1046026484 45576100
3297494078 4281690296 13277000
2918762815 2804547954 68393011
1854575140 1466348312 26275245
3908929685 3366340214 89096975
511153081 1400440018 59187015
655739761 864167436 181859048
120775441 1629769453 33060385
2241282066 2745696029 58851925
2300133991 2585145918 117879532
4201013600 3178669112 93953696
837598809 84792564 117506263
1039897636 202298827 661868609
3619162687 3018283283 55591901
0 1736967564 77176799
1780437414 1662829838 74137726`

const rawWaterToLight = `279076302 606101520 367597147
3291538704 3736283841 125013874
0 1709355698 279076302
2106348780 1988432000 822929157
2929277937 0 362260767
890514202 2811361157 924922684
3416552578 973698667 444745137
1815436886 1418443804 290911894
646673449 362260767 243840753`

const rawLightToTemperature = `208346365 819874354 29069132
731840321 689055790 58614896
4186248520 4104876526 108718776
3429769554 3384048873 23936103
1459123931 2691296758 217855736
790455217 952719646 105546549
1416544830 2047230764 42579101
0 1202755810 208346365
1399364673 1598820754 17180157
2576491919 747670686 452381
901868462 2408707242 282589516
3626168682 4259315983 35651313
341191657 748123067 71751287
2721433915 1411102175 187718579
3822370242 3740998248 198425166
3245552556 4213595302 45720681
1676979667 100628240 254569707
896001766 2041364068 5866696
3291273237 3245552556 138496317
3661819995 3580448001 160550247
2063025564 380090092 308965698
4020795408 3939423414 165453112
237415497 848943486 103776160
1931549374 1909887878 131476190
2576944300 1058266195 144489615
717031505 2089809865 14808816
412942944 2104618681 304088561
1209350123 0 100628240
1309978363 1820501568 89386310
3453705657 3407984976 172463025
2371991262 1616000911 204500657
1184457978 355197947 24892145`

const rawTemperatureToHumidity = `4116612848 1770461885 178354448
475467700 3077125572 130863723
1272723717 1181397963 5578998
3758341401 495891106 279864899
1687813623 1591451985 2235236
2530388822 2518678506 215908033
2282034531 2032693852 208761140
1471990450 379604394 116286712
1817301926 3588566075 238614487
3086830522 2960704657 28309403
3692580145 2002277669 19886809
616860797 3221548716 360840790
3115139925 1226570112 16611162
336172750 170230298 133118381
977701587 1693223682 77238203
1366414227 775756005 105576223
2055916413 2734586539 226118118
4038206300 2287329439 78406548
3712466954 2241454992 45874447
3556277513 2516499157 2179349
1278302715 2989014060 88111512
1588277162 1593687221 99536461
2746296855 3827180562 340533667
469291131 3582389506 6176569
1054939790 1960273136 42004533
1247816059 3207989295 13559421
2490795671 1186976961 39593151
1261375480 1948816333 11348237
36107015 881332228 300065735
1096944323 2365735987 150763170
3131751087 303348679 76255715
3558456862 36107015 134123283
3208006802 1243181274 348270711
606331423 2022164478 10529374
1690048859 4167714229 127253067
1247707493 1960164570 108566`

const rawHumidityToLocation = `3760908805 3662107228 155796250
1580497895 3884288658 144897726
3166374808 442179790 213926492
121876139 656106282 138383174
393463083 2300882189 128101885
2948945727 3512929162 110263469
521564968 2652674020 210495874
1940349169 3864399213 19889445
1197505529 794489456 93759960
904168980 2539693608 75416982
1725395621 3623192631 38914597
2881030575 888249416 49678445
2116891732 1943237764 146499392
979585962 2615110590 37563430
3143485439 3262014106 22889369
791255257 4029186384 109003936
4209132419 4140663408 85834877
1764310218 192277746 165625801
2023373170 2466550792 73142816
4140663408 4226498285 68469011
2269931546 1003317103 611099029
1291265489 0 119152028
2930709020 3243777399 18236707
732060842 1884043349 59194415
1410417517 1614416132 170080378
1960238614 937927861 63134556
1929936019 2089737156 10413150
3380301300 2863169894 380607505
3916705055 3291443897 221485265
355896365 2428984074 37566718
2254686 3817903478 46495735
2096515986 2280506443 20375746
1017149392 2100150306 180356137
0 1001062417 2254686
260259313 1784496510 95637052
48750421 119152028 73125718
3059209196 357903547 84276243
2263391124 3284903475 6540422
900259193 1880133562 3909787`

function convertDataToArray (data) {
    const lines = data.trim().split("\n")
    const dataArray = lines.map(line => line.split(' ').map(Number));
    return dataArray;
}

const seeds = convertDataToArray(rawSeeds).flat()
const seedToSoil = convertDataToArray(rawSeedToSoil)
const soilToFertiliser = convertDataToArray(rawSoilToFertiliser)
const fertiliserToWater = convertDataToArray(rawFertiliserToWater)
const waterToLight = convertDataToArray(rawWaterToLight)
const lightToTemperature = convertDataToArray(rawLightToTemperature)
const temperatureToHumidity = convertDataToArray(rawTemperatureToHumidity)
const humidityToLocation = convertDataToArray(rawHumidityToLocation)





module.exports = {seeds, seedToSoil, soilToFertiliser, fertiliserToWater, waterToLight, lightToTemperature, temperatureToHumidity, humidityToLocation, convertDataToArray}