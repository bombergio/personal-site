---
title: Chocolatey package for MySQL ODBC driver
link: https://community.chocolatey.org/packages/mysql.odbc
source: https://github.com/bombergio/choco-mysql-connector-odbc
tags: [ "Chocolatey", "Powershell", "GitHub actions" ]
---
I made this Chocolatey package when worked in a company and used Chocolatey as one of the tools to create pre-configured disposable Windows servers.

When I moved to a different project, people kept asking to release a new version.
To avoid checking for the release manually, my solution was to create a self-updating repo (with the help of GitHub actions) that keeps an eye on the MySQL releases page, updates package metadata and submits to Chocolatey for review.
