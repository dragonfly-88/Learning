/*

#1 What is 3 tier architecture? ~ 3 modules  // Service Oriented Architecture

- Client Tier (presentation layer, how your app gets shown)
- Logic Tier (workflow system, web framework)
- Data Tier (database(s) - can be SQL, noSQL, Search Engine)

// 3 tier architecture is a powerful design concept that allows numerous advantages including scaling benefits and code organization.


2 Tier - Logic & Data Tear in 1


3 tier PROs:
versatile, mourn stack, solve business problems quick, customazible
CONs: difficult to maintain by time, with new databases etc
intradependencies between diff modules


#2 ITSM - What is it? Introduction to IT Service Management

IT - HR connection
eg. ITIL
Ticketing system, Change Management 


#3 Overview of platform architecture

multi-instance architecture, availability, redundancy, backups, security, and domain separation

Applies to UI16, the latest version of the user interface, in the New York release.
UI16 is the default user interface for new instances, starting with the Geneva release. 
To get UI16 on upgraded instances, the UI16 plugin must be activated.


#4 ServiceNow System Administration Training | Introduction and Platform Overview & Architecture


American company providing Application Platform As A Service
automation platform 

cloud-based computing model which provides the infrastructure needed to develop, run & manage applications

not limited to any business functions (Customer Service Management, Intelligens Apps, HR, Security Operations, 
Governance, Risk & Compliance, SW Asset Mgmt, IT Business Mngt, IT Service Mngt, etc)

Single Data Model - flexible table schema
Multi-Instance architecture
High availability Architacture Data Centers

one organization may have one or more instances that communicate with each other

outage --> traffic rerouted easily

frequent backups (weekly 4) + 6 days of daily differential backup

multi-tenant architecture - organizations have their own instances

Main Instance -- Backup Instance

AHA - Advanced High Availability Architecture
- 2 különböző adatközpontba is le van másolva az adatod
- 7 naponta van teljes biztonsági mentés (hard disc)
- minden nap van differencial mentés -- nem az egész instance, csak a változtatások, amiket 
az előző ilyen mentéshez képest csináltál - köv. teljes mentésig így 
- 4 hétig tárolja a backupot
- lehet version control-os mentést is csinálni SN-ban 


Multi-instance vs multi-tenant
egy instance, külön domainok alatt elérhető

Instance - cégé, fejlesztői, tesztelői (félig cég csinálhatja)


- User Interface and Branding

3 ways of interaction: User Interface (native UI), Mobile Interface, Portal Interface

Supported Browsers: Chrome, Edge, Firefox, Safari

Apps - 3 different : Service Now Agent, Now Mobile, ServiceNow Onboarding
Service Now Agent - for developers
Now Mobile - users
Onboarding app - managing newhires

Portal - self service experience  // servicenow.com/sp
users can see their requests
knowledge base, community..

Supported Authentication:
local DB, SSO (single sign-on), LDAP (light-weight active directory account), OAuth 2.0 (open authentication, client ID), 
Digest Token, Multi Factor

Role Based Access
- roles provided to users 
ITIL, ADMIN, KNOWLEDGE ADMIN, APPROVER

Components:
User, Group, Role
better to assign roles to groups instead of individuals!! 


Base System Roles - Admin, Approver_user, Itil, Catalog_admin



#5 Getting started with the Now Platform user interface

Elevate Roles -- ha vmit nem tudunk szerkeszteni, akk érdemes pl megkérni
Impersonate User


#6 Getting started with the application navigator

#7 Configuring your instance with guided setup

guided setup wizard



# 8  ServiceNow System Administration Training | User Interface and Branding

two versions: UI16, UI15

name of instance on the left next to comp logo

Basic Configuration UI16 -- Branding settings --> a company instance-ről ismeri meg mindenki, h jó helyen van:)
Welcome Page Content


#9 Process User and Manager Capabilities | Getting Started with the ITIL Role

ITSM - Incident Mgmt
Sending an email, calling service desk, using self service

ITIL user = fulfiller

incident - problem (optional) - change request (optional)

CMDB - configuration management db



#10 Navigate to a record or module using a URL

Users can navigate to a record or module directly by using a URL. 
This topic explains the URL schema by which the system renders pages.


nézet: listák / form (New) --> record módosítása, új hozzáadása


App Studio Engine - ben tudunk dolgozni
--> Create Application
- Global -- egész instance-ben elérhető lesz, hatnak a többi tevékenységre, ált. nem ez kell nekünk, hanem a Scope --> adott app




*/