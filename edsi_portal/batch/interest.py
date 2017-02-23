

# A periodic task that will run every minute (the symbol "*" means every)
def accrue_interest(rate, principal, number_days):
    daf = ((rate/100) / 365) * principal
    return daf * number_days
