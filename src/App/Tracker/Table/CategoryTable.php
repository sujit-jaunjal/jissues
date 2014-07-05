<?php
/**
 * Part of the Joomla Tracker's Tracker Application
 *
 * @copyright  Copyright (C) 2012 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license    http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License Version 2 or Later
 */

namespace App\Tracker\Table;

use JTracker\Database\AbstractDatabaseTable;
use Joomla\Database\DatabaseDriver;
use Joomla\Utilities\ArrayHelper;
use Joomla\Input\Input;

/**
 * Table interface class for the #__issue_category table
 *
 * @property   integer  $id             PK
 * @property   integer  $project_id     The Project id
 * @property   string   $name           The category name
 *
 * @since  1.0
 */
class CategoryTable extends AbstractDatabaseTable
{
	/**
	 * Constructor
	 *
	 * @param   DatabaseDriver  $database  A database connector object.
	 *
	 * @since   1.0
	 */
	public function __construct(DatabaseDriver $database)
	{
		parent::__construct('#__issues_categories', 'id', $database);
	}

	/**
	 * Method to perform sanity checks on the AbstractDatabaseTable instance properties to ensure
	 * they are safe to store in the database.
	 *
	 * @return  $this  Method allows chaining
	 *
	 * @since   1.0
	 * @throws  \InvalidArgumentException
	 */
	public function check()
	{
		$errors = array();

		if (trim($this->name) == '')
		{
			$errors[] = g11n3t('a name is required for the category.');
		}

		if (strlen($this->name) > 150)
		{
			$errors[] = g11n3t('The length of the name can not exceed 150 characters.');
		}

		if ($errors)
		{
			throw new \InvalidArgumentException(implode("\n", $errors));
		}

		return $this;
	}
}
