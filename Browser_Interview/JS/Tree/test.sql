-- 

CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `name` int(11) DEFAULT NULL COMMENT '学生名字',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `student_id` int(11) NOT NULL COMMENT '学生ID',
  `name` int(11) DEFAULT NULL COMMENT '学科名字',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `score` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `subject_id` int(11) NOT NULL COMMENT '学科ID',
  `grade_point` int(11) DEFAULT NULL COMMENT '分数',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


SELECT `a.name` AS '学生姓名', `b.name` AS '学科', `c.grade_point` AS '分数' FROM `student` AS `a` LEFT JOIN `subject` as `b` ON (`a`.`id` = `b`.`student_id`) LEFT JOIN `score` as `c` ON (`b`.`id` = `c`.`subject_id`);