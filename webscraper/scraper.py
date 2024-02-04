from bs4 import BeautifulSoup
import requests
import json

class Scraper:
    def __init__(self) -> None:
        pass

    def readLender(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        lenders = soup.findAll('p', attrs={'class':'ct_rb fv_R6'})
        lenderDoc = open("lenders.txt", "w")
        for lender in lenders:
            lenderDoc.write(lender.text)
            lenderDoc.write("\n")
        lenderDoc.close()
        
        # txt to json
        tojson = {}
        fields = ["lender"]
        with open('lenders.txt') as file:
            l = 1
            for line in file:
                lens = list(line.strip().split(None, 1))
                # key, val = line.strip().split(None, 1)
                print(lens)
                # tojson[key] = val.strip()
                sno = 'lender' + str(l)
                i = 0
                dict2 = {}
                while i < len(fields):
                    dict2[fields[i]] = lens[i]
                    i += 1
                tojson[sno] = dict2
                l += 1

        out = open("lenders.json", "w")
        json.dump(tojson, out, indent = 4, sort_keys = False)
        out.close()


        
    def readLoanInfo(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        loanInfo = soup.findAll('td', attrs={'class':'h7_jf h7_Wp'})
        loanInfoDoc = open("loanAmts.txt", "w")
        for loans in loanInfo:
            loanInfoDoc.write(loans.text)
            loanInfoDoc.write("\n")
        loanInfoDoc.close()

        # txt to json
        dict1 = {}
        fields = ["field1", "field2", "field3", "field4", "field5"]
        with open("loanAmts.txt") as file:
            l = 1
            for line in file:
                desc = list(line.strip().split(None, 5))
                print(desc)
                sno = "loaner" + str(l)
                i = 0
                dict2 = {}
                while i < len(fields):
                    dict2[fields[i]] = desc[i]
                    i = i + 1
                dict1[sno] = dict2
                l += 1
        out = open("loanAmts.json", "w")
        json.dump(dict1, out, indent = 4)
        out.close()