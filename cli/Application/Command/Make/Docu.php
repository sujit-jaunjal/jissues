<?php
/**
 * Part of the Joomla! Tracker application.
 *
 * @copyright  Copyright (C) 2012 - 2014 Open Source Matters, Inc. All rights reserved.
 * @license    http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License Version 2 or Later
 */

namespace Application\Command\Make;

use App\Text\Table\ArticlesTable;

/**
 * Class for parsing documentation files to inject into the site
 *
 * @since  1.0
 */
class Docu extends Make
{
	/**
	 * Constructor.
	 *
	 * @since   1.0
	 */
	public function __construct()
	{
		parent::__construct();

		$this->description = 'Compile documentation using GitHub Flavored Markdown';
	}

	/**
	 * Execute the command.
	 *
	 * @return  void
	 *
	 * @since   1.0
	 */
	public function execute()
	{
		$this->getApplication()->outputTitle('Make Documentation');

		$this->usePBar = $this->getApplication()->get('cli-application.progress-bar');

		if ($this->getOption('noprogress'))
		{
			$this->usePBar = false;
		}

		$this->github = $this->getContainer()->get('gitHub');

		$this->getApplication()->displayGitHubRateLimit();

		/** @var \Joomla\Database\DatabaseDriver $db */
		$db = $this->getContainer()->get('db');

		$docuBase   = JPATH_ROOT . '/Documentation';

		/** @var  \RecursiveDirectoryIterator $it */
		$it = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($docuBase, \FilesystemIterator::SKIP_DOTS));

		$this
			->out(sprintf('Compiling documentation in: %s', $docuBase))
			->out();

		while ($it->valid())
		{
			if ($it->isDir())
			{
				$it->next();

				continue;
			}

			$file = new \stdClass;

			$file->filename = $it->getFilename();

			$path = $it->getSubPath();
			$page = substr($it->getFilename(), 0, strrpos($it->getFilename(), '.'));

			$this->debugOut('Compiling: ' . $page);

			$table = new ArticlesTable($db);

			$table->{$table->getKeyName()} = null;

			try
			{
				$table->load(['alias' => $page, 'path' => $path]);
			}
			catch (\RuntimeException $e)
			{
				// New item
			}

			$table->is_file = '1';
			$table->path    = $it->getSubPath();
			$table->alias   = $page;
			$table->text_md = file_get_contents($it->key());
			$table->text    = $this->github->markdown->render($table->text_md);

			$table->store();

			$this->out('.', false);

			$it->next();
		}

		$this->out()
			->out('Finished.');
	}
}
