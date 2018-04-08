import pandas as pd
df = pd.read_csv('Match.csv')

print(df.loc[(df['Team_Name_Id'] == 1) & (df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == 8)])
totalMatches = [[]*0 for i in range(14)]
for i in range(1,14):
    for j in range(8, 17):
        totalMatches[i].append(len(df.loc[(df['Team_Name_Id'] == i) & (df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == j)]) + len(df.loc[(df['Opponent_Team_Id'] == i) & (df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == j)]))

print(totalMatches)

totalMatchesWon = [[]*0 for i in range(14)]
for i in range(1,14):
    for j in range(8, 17):
        totalMatchesWon[i].append(len(df.loc[(df['Team_Name_Id'] == i) & (df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == j) & (df['Match_Winner_Id'] == i)]) + len(df.loc[(df['Opponent_Team_Id'] == i) & (df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == j) & (df['Match_Winner_Id'] == i)]))

print(totalMatchesWon)

tieAndWin = [[]*0 for i in range(14)]
tieAndLose = [[]*0 for i in range(14)]

for i in range(1,14):
    tieAndWin[i].append(len(df.loc[(df['Team_Name_Id'] == i) & (df['Match_Winner_Id'] == i) & (df['IS_Superover'] == 1)]))

for i in range(1,14):
    tieAndLose[i].append(len(df.loc[(df['Team_Name_Id'] == i) & (df['Match_Winner_Id'] != i) & (df['IS_Superover'] == 1)]))

print(tieAndWin)
print(tieAndLose)

first = [[]*0 for i in range(17)]


for i in range(8,17):
    first[i].append(df.loc[(df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == i)][-1:]['Match_Winner_Id'].values[0])

print(first[8:])

second = [[]*0 for i in range(17)]

lastMatch = df.loc[(df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == 8)][-1:]

print(lastMatch['Match_Winner_Id'].values[0] == lastMatch['Opponent_Team_Id'].values[0])

for i in range(8, 17):
    lastMatch = df.loc[(df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == i)][-1:]
    if lastMatch['Match_Winner_Id'].values[0] == lastMatch['Team_Name_Id'].values[0]:
        secondTeam = lastMatch['Opponent_Team_Id'].values[0]
    else:
        secondTeam = lastMatch['Team_Name_Id'].values[0]
    second[i].append(secondTeam)

print(second[8:])

matchesPlace = [[]*0 for i in range(17)]


for i in range(8,17):
    data = df.loc[df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == i]
    m = pd.DataFrame(data=data, columns=['Match_Date','City_Name', 'Host_Country','Match_Date', 'lat', 'lng'])
    w = "0"+str(i) if i < 10 else str(i)
    m.to_csv('matches-20'+w+'.csv', header=True, index=False)

matchesPlace = [[]*0 for i in range(17)]


for i in range(8,17):
    data = df.loc[df['Match_Date'].apply(lambda x: x[-2:]).astype(int) == i]
    m = pd.DataFrame(data=data, columns=['Match_Date','Team_Name_Id', 'Opponent_Team_Id','Match_Winner_Id', 'Win_Type', 'Won_By'])
    changeColumn = ['Team_Name_Id', 'Opponent_Team_Id', 'Match_Winner_Id']
    for j in range(len(changeColumn)):
        m[changeColumn[j]] = m[changeColumn[j]].map({
            1: 'Kolkata Knight Riders',
            2: 'Royal Challengers Bangalore',
            3: 'Chennai Super Kings',
            4: 'Kings XI Punjab',
            5: 'Rajasthan Royals',
            6: 'Delhi Daredevils',
            7: 'Mumbai Indians',
            9: 'Deccan Chargers',
            8: 'Kochi Tuskers Kerala',
            10: 'Pune Warriors',
            11: 'Sunrisers Hyderabad',
            12: 'Rising Pune Supergiants',
            13: 'Gujarat Lions'
        })
    w = "0"+str(i) if i < 10 else str(i)
    m.to_csv('matches-20'+w+'.csv', header=True, index=False)