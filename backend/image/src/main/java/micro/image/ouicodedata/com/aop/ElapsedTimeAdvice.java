package micro.image.ouicodedata.com.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
@Slf4j
public class ElapsedTimeAdvice {

    @Around("@annotation(micro.image.ouicodedata.com.annotations.TrackTime)")
    public Object methodTimeLogger(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        long startTime = System.currentTimeMillis();
        Object result = proceedingJoinPoint.proceed();
        long endTime = System.currentTimeMillis();

        String className = proceedingJoinPoint.getSignature().getDeclaringTypeName();
        String methodName = proceedingJoinPoint.getSignature().getName();

        String elapsedTimeMessage = className + "." + methodName + ": Elapsed time : " + (endTime-startTime) + " ms";

        log.info(elapsedTimeMessage);

        return result;
    }
}