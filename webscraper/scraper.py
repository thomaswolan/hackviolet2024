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
        
        # convert txt into json now
        jsondict = {}
        fields = ["lender"]
        with open("lenders.txt") as ld:
            lenderID = 1
            for line in ld:
                desc = list(line.strip("\n").split(None, 4))
                print(desc)
                key = "lender" + str(lenderID)
                i = 0
                newDict = {}
                while i < len(fields):
                    newDict[fields[i]] = desc[i]
                    i += 1
                jsondict[key] = newDict
                lenderID += 1
        finaljson = open("lenders.json", "w")
        json.dump(jsondict, finaljson, indent = 4)
        finaljson.close()    

    def readLoanInfo(self, website):
        page = requests.get(website)
        soup = BeautifulSoup(page.text, "html.parser")
        loanInfo = soup.findAll('td', attrs={'class':'h7_jf h7_Wp'})
        loanInfoDoc = open("loanAmts.txt", "w")
        for loans in loanInfo:
            loanInfoDoc.write(loans.text)
            loanInfoDoc.write("\n")
    