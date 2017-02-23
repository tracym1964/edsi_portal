import time
from celery.schedules import crontab
from celery.task import periodic_task
from batch.interest import accrue_interest
from celery.utils.log import get_task_logger
from datetime import datetime


logger = get_task_logger(__name__)


# A periodic task that will run every minute (the symbol "*" means every)
@periodic_task(run_every=(crontab(hour="*", minute="*", day_of_week="*")))
def daily_update_example():
    logger.info("Start nightly update task")
    result = accrue_interest(5.0, 1000.00, 5)
    logger.info("Nightly update task finished: Interest accrued = %f" % result)
